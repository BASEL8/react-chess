import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  wrapper: {
    diplay: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap'
  },
  table: {
    maxWidth: '60vw',
  },
  buttonContainer: {
    maxWidth: '25vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  }
});

function createData(id, player, fat, carbs, protein) {
  return { id, player, fat, carbs, protein };
}

const rows = [
  createData(1, 'Frozen yoghurt', 6.0, 24),
  createData(2, 'Ice cream sandwich', 9.0, 37),
  createData(3, 'Eclair', 16.0, 24),
  createData(4, 'Cupcake', 3.7, 67),
  createData(5, 'Gingerbread', 16.0, 49),
];

export default function Lobby () {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Play</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.player}</TableCell>
                <TableCell><Button variant="outlined">Play</Button></TableCell>
                <TableCell><Button><ClearIcon /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.buttonContainer}>
        <Button variant="outlined">Create a new match</Button>
        <Button variant="outlined">Play with a friend</Button>
        <Button variant="outlined">Play against computer</Button>
      </div>
    </div>
  );
}
