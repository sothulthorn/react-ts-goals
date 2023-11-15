import { FC } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoal as CourseGoalProp } from '../App';

interface CourseGoalListProps {
  goals: CourseGoalProp[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
