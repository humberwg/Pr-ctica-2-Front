import { useState } from "react";
import styled from 'styled-components';

type Row = {
  nombre: string;
    dni: string;
};

const Tabla = () => {

    const [nombre, setNombre] = useState<string>("");
    const [dni, setDNI] = useState<string>(" ");
    const [rows, setRows] = useState<Row[]>([]); 
    const papelera= "🗑️";
    
    const addRow = (nombre: string, dni: string) => {
    setRows([...rows, { nombre, dni }]);
    };

    const deleteRow = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
    };

    return (
    <>       
            <Grid container = {true} cont1>
                <Grid item = {true}>Nombre</Grid>
                <Grid item = {true}>DNI</Grid>
                <br/>
                {/*<button onClick={deleteRow}>{papelera}</button>*/}
                {rows.map((row, index) => (
                    <>
                        <input
                            value={row.nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input
                        value={row.dni}
                            onChange={(e) => setDNI(e.target.value)}
                />
                        <button onClick={() => deleteRow (index) }>{papelera}</button>
                    </>
                ))}
            </Grid> 

            <br/><br/>

            <>
                <Grid container = {true}>
                    <Grid item = {true}>Nombre</Grid>
                    <Grid item = {true}>DNI</Grid>

                    <br/>

                    <Grid item = {true}> <input type="text" value={nombre} onChange={(e) => 
                        setNombre(e.target.value)} /> </Grid>
                    <Grid item = {true}> <input type="text" value={dni} onChange={(e) => 
                        setDNI(e.target.value)} /> </Grid>
                         <div>
                        <button onClick={()=> (
                            addRow(nombre, dni)
                            )}>+</button>
                        </div>
                    </Grid>
            </>

    </>
    )
}

type GridProps = {
    container: boolean;
    item: boolean;
}

const Grid = styled.div`
  align-items: ${(props: GridProps) => props.container ? "center" : "none"};
  justify-content: ${(props: GridProps) => props.container ? "center" : "none"};
  background-size: ${(props: GridProps) => props.container ? "300% 300%" : "none"};
  background-image: ${(props: GridProps) => props.container ? "linear-gradient(-45deg, rgb(255, 255, 255) 0%, rgb(129, 249, 255) 25%, rgb(31, 82, 199) 51%, rgb(0, 0, 0) 100%)" : "none"};
    animation: ${(props: GridProps) => props.container ? "AnimateBG 10s ease infinite" : "none"};

    @keyframes AnimateBG { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

    display: ${(props: GridProps) => props.container ? "inline-grid" : "block"};
    grid-template-columns: ${(props: GridProps) => props.container ? "auto auto auto" : "none"};
    padding: ${(props: GridProps) => props.container ? "10px" : "none"};
    gap: ${(props: GridProps) => props.container ? "10px" : "none"}; // Espacio entre filas y columnas

    background-color: ${(props: GridProps) => props.item ? "rgba(255, 255, 255, 0.8)" : "none"};
    border: ${(props: GridProps) => props.item ? "1px solid rgba(0, 0, 0, 0.8)" : "none"};
    padding: ${(props: GridProps) => props.item ? "20px" : "none"};
    font-size: ${(props: GridProps) => props.item ? "30px" : "none"};
    text-align: ${(props: GridProps) => props.item ? "center" : "none"};
`
export default Tabla;