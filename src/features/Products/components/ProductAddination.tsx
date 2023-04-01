import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container/Container'
import { Box } from '@mui/material'

function createData(name: string, calories: number, fat: number, carbs: string, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Weight', 159, 6.0, '4.6 kg', 4.0),
  createData('Dimensions', 237, 9.0, '110 * 110 * 150 cm', 4.3),
  createData('Color', 262, 16.0, 'Black, White, Brown, Gray', 6.0),
  createData('Material', 305, 3.7, 'eather, Metal', 4.3),
  createData('Style', 356, 16.0, 'Contemporary, Minimalism, Industrial', 3.9),
]
// MuiTable-root
export function ProductAddination() {
  return (
    <TableContainer component={Box}>
      <Container maxWidth={'lg'}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={{ fontSize: '25px', width: '300px', color: 'var(--color-primary)' }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>

                <TableCell sx={{ fontSize: '25px', color: 'var(--color-primary)' }} align="center">
                  {row.carbs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </TableContainer>
  )
}
