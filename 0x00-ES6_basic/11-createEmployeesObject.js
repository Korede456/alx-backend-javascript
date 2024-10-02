export default function craeteEmployeesObject(departmentName, employees) {
  return {
    [departmentName: [
      ...employees,
    ],
  };
}
