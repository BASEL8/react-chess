import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
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

function createData(id, player) {
  return { id, player };
}

const rows = [
  createData(1, 'Frozen yoghurt'),
  createData(2, 'Ice cream sandwich'),
  createData(3, 'Eclair'),
  createData(4, 'Cupcake'),
  createData(5, 'Gingerbread'),
];

export default function Lobby () {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table" data-testid="table">
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
      <div className={classes.buttonContainer} data-testid="buttons">
        <Button variant="outlined">Create a new match</Button>
        <Button variant="outlined">Play with a friend</Button>
        <Button variant="outlined">Play against computer</Button>
      </div>
    </div>
  );
}
