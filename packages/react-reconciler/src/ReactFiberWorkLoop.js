import { scheduleCallback } from 'scheduler';
import { createWorkInProgress } from './ReactFiber';

let workInProgress = null;

export function scheduleUpdateOnFiber(root) {
  ensureRootIsScheduled(root);
}

function ensureRootIsScheduled(root) {
  // 浏览器空余时间执行并发任务
  scheduleCallback(performConcurrentWorkOnRoot.bind(null, root));
}

function performConcurrentWorkOnRoot(root) {
  renderRootSync(root);
  root.finishWork = root.current.alternate; // 轮替
  // commitRoot(root);
}

function renderRootSync(root) {
  prepareFreshStack(root);
  workLoopSync();
}

function prepareFreshStack(root) {
  // 创建工作中
  workInProgress = createWorkInProgress(root.current, null);
}

function workLoopSync() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}

function performUnitOfWork(unitOfWork) {
  const current = unitOfWork.alternate;
  const next = beginWork(current, unitOfWork);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  workInProgress = null; // TODO:记得删掉
  if (next === null) {
    completeUnitOfWork(unitOfWork);
  } else {
    workInProgress = next;
  }
}

function completeUnitOfWork() {
  console.log('complete');
}
