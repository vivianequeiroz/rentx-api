import { v4 as uuidV4 } from 'uuid';

class Specification {
  name: string;
  description: string;
  id?: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Specification };
