const science_courses = ['Physics', 'Chemistry', 'Biology'];
const arts_courses = ['History', 'Literature', 'Art'];
const all_courses = [...science_courses, ...arts_courses, 'Englsih'];

console.log(all_courses);

const student = { name: 'John', age: 22 };
const updated_student = { ...student, age: 23, city: 'Lagos', course: 'Software Engineering' };

console.log(updated_student);