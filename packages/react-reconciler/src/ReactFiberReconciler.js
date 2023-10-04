import { createFiberRoot } from './ReactFiberRoot';
import { createUpdate, enqueueUpdate } from './ReactFiberClassUpdateQueue';
import { scheduleUpdateOnFiber } from './ReactFiberWorkLoop';

export function createContainer(container) {
  return createFiberRoot(container);
}
export function updateContainer(element, container) {
  const current = container.current;
  const update = createUpdate();
  update.payload = { element };
  const root = enqueueUpdate(current, update);
  scheduleUpdateOnFiber(root);
}
