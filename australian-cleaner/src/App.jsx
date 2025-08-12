import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Snackbar from '@mui/material/Snackbar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Hero from './presentation/components/hero';




function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* AppBar con menú y título */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material-UI Demo
          </Typography>
          <Button color="inherit" onClick={() => setModalOpen(true)}>Open Modal</Button>
        </Toolbar>
      </AppBar>

        <Hero></Hero>
      <main style={{ padding: 16, maxWidth: 600, margin: 'auto' }}>

        {/* Título principal */}
        <Typography variant="h4" gutterBottom>
          Vite + React + Material-UI
        </Typography>

        {/* Subtítulo */}
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
          Experimenta la flexibilidad de Material-UI con varios componentes y estilos.
        </Typography>

        {/* Botón contador */}
        <Button variant="contained" onClick={() => setCount(c => c + 1)}>
          Count is {count}
        </Button>

        {/* Input de texto */}
        <Box mt={3}>
          <TextField
            label="Introduce tu nombre"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Ejemplo: Jeronimo"
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            helperText="Este campo es requerido para el registro"
          />
        </Box>

        {/* Checkbox */}
        <Box mt={3}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />}
            label="Acepto los términos y condiciones"
          />
          {!checked && (
            <Typography variant="caption" color="error" display="block">
              Debes aceptar para continuar
            </Typography>
          )}
        </Box>

        {/* Radio Buttons */}
        <Box mt={3}>
          <Typography variant="subtitle2" gutterBottom>
            Elige una opción:
          </Typography>
          <RadioGroup
            row
            value={radioValue}
            onChange={e => setRadioValue(e.target.value)}
            aria-label="Opciones"
            name="radio-buttons-group"
          >
            <FormControlLabel value="option1" control={<Radio />} label="Opción 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Opción 2" />
            <FormControlLabel value="option3" control={<Radio />} label="Opción 3" />
          </RadioGroup>
        </Box>

        {/* Select dropdown */}
        <Box mt={3} sx={{ minWidth: 120 }}>
          <Typography variant="subtitle2" gutterBottom>
            Selecciona un país:
          </Typography>
          <Select
            value={selectValue}
            onChange={e => setSelectValue(e.target.value)}
            displayEmpty
            fullWidth
            inputProps={{ 'aria-label': 'Seleccionar país' }}
          >
            <MenuItem value="" disabled>
              Selecciona un país
            </MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
            <MenuItem value="brasil">Brasil</MenuItem>
            <MenuItem value="chile">Chile</MenuItem>
            <MenuItem value="uruguay">Uruguay</MenuItem>
          </Select>
          {selectValue === '' && (
            <Typography variant="caption" color="error">
              Por favor selecciona un país
            </Typography>
          )}
        </Box>

        {/* Card con contenido */}
        <Box mt={5} maxWidth={345}>
          <Card variant="outlined" sx={{ bgcolor: '#f9f9f9' }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Tarjeta de Información
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este es un componente Card simple de Material-UI que puede ser personalizado con estilos y contenido.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Botón para abrir snackbar */}
        <Box mt={5}>
          <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>
            Mostrar Notificación
          </Button>
        </Box>

        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          message="¡Esta es una notificación de snackbar!"
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />

        {/* Modal */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 320,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Modal con información
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Aquí podés poner cualquier contenido que necesites, como formularios, mensajes o confirmaciones.
            </Typography>
            <Button sx={{ mt: 3 }} variant="contained" onClick={() => setModalOpen(false)} fullWidth>
              Cerrar
            </Button>
          </Box>
        </Modal>
      </main>
    </>
  );
}

export default App;
