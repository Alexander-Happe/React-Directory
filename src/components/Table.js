import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Department", field: "Department" },
      { title: "Phone Number", field: "PhoneNumber", type: "numeric" }
    ],
    data: [
      {
        name: "Alex",
        surname: "Happe",
        Department: "Management",
        PhoneNumber: 7777777777
      },
      {
        name: "Devin",
        surname: "Alexander",
        Department: "IT",
        PhoneNumber: 5555555555
      },
      {
        name: "Grayson",
        surname: "Mechler",
        Department: "Managment",
        PhoneNumber: 2222222222
      },
      {
        name: "Jeremy",
        surname: "Pellow",
        Department: "CEO",
        PhoneNumber: "11111111111"
      }
    ]
  });

  return (
    <MaterialTable
      title="Company Directory"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
