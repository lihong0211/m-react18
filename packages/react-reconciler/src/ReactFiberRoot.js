import { createHostRootFiber } from './ReactFiber';
import { initalUpdateQueue } from './ReactFiberClassUpdateQueue';

function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo); // FiberRoot  整个应用程序开始的地方
  const uninitializedFiber = createHostRootFiber(); // RootFiber 整个Fiber树开始的地方
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;
  initalUpdateQueue(uninitializedFiber);
  return root;
}
