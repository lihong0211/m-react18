import { HostRoot } from './ReactWorkTags';
import { NoFlags } from './ReactFiberFlags';
export function FiberNode(tag, pendingProps, key) {
  // 作为静态数据结构的属性
  this.tag = tag; // fiber节点类型
  this.key = key;
  this.type = null; // fiber对应VNode节点类型
  this.elementType = null;
  this.stateNode = null; // 指向真实节点（函数组件，类组件不是）
  // 用于构建Fiber树的属性
  this.child = null;
  this.sibling = null;
  this.return = null;
  this.index = 0;
  this.ref = null;
  // 用于动态工作单元
  this.pendingProps = pendingProps;
  this.memorizedProps = null;
  this.memorizedState = null;

  this.updateQueue = null;
  this.flags = NoFlags; //
  this.subtreeFlags = NoFlags; //
  this.dependencies = null;
  this.alternate = null;
  this.mode = null; // TODO:

  this.effectTag = null; // TODO:
  this.firstEffect = null;
  this.nextEffect = null;
  this.lastEffect = null;
  // 调度优先级
  this.lanes = null; // TODO:
  this.childLanes = null; // TODO:
}

export function createFiber(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}

export function createHostRootFiber() {
  return createFiber(HostRoot, null, null);
}

export function createWorkInProgress(current, pendingProps) {
  let workInProgress = current.alternate;
  if (workInProgress === null) {
    workInProgress = createFiber(current.tag, pendingProps, current.key);
    workInProgress.type = current.type;
    workInProgress.stateNode = current.stateNode;
    workInProgress.alternate = current;
  } else {
    workInProgress.pendingProps = pendingProps;
    workInProgress.type = current.type;
    workInProgress.flags = NoFlags;
    workInProgress.subtreeFlags = NoFlags;
  }
  workInProgress.child = current.child;
  workInProgress.memorizedProps = current.memorizedProps;
  workInProgress.memorizedState = current.memorizedState;
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  return workInProgress;
}
