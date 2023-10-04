import { HostRoot } from './ReactWorkTags';
export function markUpdateLaneFromFiberToRoot(fiber) {
  let node = fiber;
  let parent = fiber.return;
  while (parent !== null) {
    node = parent;
    node.return = parent.return;
  }
  if (node.tag === HostRoot) {
    return node.stateNode;
  }
  return null;
}
