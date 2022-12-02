import { CoreEntity } from 'src/common/core/core.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Course } from '../courses/courses.entity';
import { User } from '../users/users.entity';

@Entity({ name: '_likes' })
export class Like extends CoreEntity {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Course, (course) => course.id)
  course: Course;
}
