import ClassRoom from './0-classroom';

/**
 * Creats an array of Classrooms with a specific size
 */

export default function initializeRooms() {
  return [19, 90, 34].map((size) => new ClassRoom(size));
}
