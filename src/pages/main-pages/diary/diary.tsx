import React, { ElementType } from 'react';

import MaterialTable from 'material-table';

// Table icons
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import DeleteIcon from '@material-ui/icons/Delete';

import LeftNavigation from '../../../components/left-navigation/left-navigation';
import TopNavigation from '../../../components/top-navigation/top-navigation';

interface Props {
  component: ElementType<any>;
}

const tableIcons = {
  Add: forwardRef((props: Props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props: Props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props: Props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props: Props, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props: Props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props: Props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props: Props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props: Props, ref) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props: Props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props: Props, ref) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props: Props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props: Props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props: Props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props: Props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props: Props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props: Props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props: Props, ref) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

function Diary() {
  return (
    <div className="diary">
      <TopNavigation />

      <div className="d-flex">
        <LeftNavigation />

        <div className="diary__container col-lg-9">
          <div className="container">
            <h1 className="mt-5 text-center">Личный дневник</h1>

            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <h2>Тематики дневника</h2>
                <button className="btn btn-success">Создать тематику</button>
              </div>
              <div className="mt-3">
                <MaterialTable
                  icons={tableIcons}
                  columns={[
                    {
                      title: '№',
                      field: 'diaryDirectoryNumber',
                    },
                    {
                      title: 'Тематика дневника',
                      field: 'diaryDirectory',
                    },
                    {
                      title: 'Дата создания',
                      field: 'diaryCreationDate',
                    },
                    {
                      title: 'Последнее обновление',
                      field: 'diaryLastUpdate',
                    },
                  ]}
                  data={[
                    {
                      diaryDirectoryNumber: 1,
                      diaryDirectory: 'Научное становление',
                      diaryCreationDate: '01/31/2021, 11:11 PM',
                      diaryLastUpdate: '01/31/2021, 11:11 PM',
                    },
                    {
                      diaryDirectoryNumber: 2,
                      diaryDirectory: 'Первые успехи учеников',
                      diaryCreationDate: '01/31/2021, 11:11 PM',
                      diaryLastUpdate: '01/31/2021, 11:11 PM',
                    },
                    {
                      diaryDirectoryNumber: 3,
                      diaryDirectory: 'Хобби',
                      diaryCreationDate: '01/31/2021, 11:11 PM',
                      diaryLastUpdate: '01/31/2021, 11:11 PM',
                    },
                  ]}
                  actions={[
                    {
                      icon: () => <OpenInBrowserIcon />,
                      tooltip: 'Открыть тематику',
                      onClick: (event, rowData) => alert('You saved!'),
                    },
                    {
                      icon: () => <DeleteIcon />,
                      tooltip: 'Удалить тематику',
                      onClick: (event, rowData) => alert('You saved!'),
                    },
                  ]}
                  options={{
                    showTitle: false,
                    actionsColumnIndex: 4,
                  }}
                  cellEditable={{
                    onCellEditApproved: (
                      newValue,
                      oldValue,
                      rowData,
                      columnDef
                    ) => {
                      return new Promise((resolve, reject) => {
                        console.log('newValue: ' + newValue);
                        setTimeout(resolve, 1000);
                      });
                    },
                  }}
                  localization={{
                    pagination: {
                      labelRowsSelect: 'строк',
                      // labelDisplayedRows: `${from}-${to} из ${count}`
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diary;
