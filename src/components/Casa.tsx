import styled from 'styled-components';

const Casa = () => {
    return(
    <Casax props = {true}>
    Bienvenido a la práctica de Styled Components y Grid CSS

    {/*boton para ir a la pagina tabla.tsx*/}
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <a href="/table">Tabla</a>
    </Casax>
    )
}

type CasaProps = {
    props: boolean;
}

const Casax = styled.div`
    width: ${(props: CasaProps) => props.props ? "50%" : "none"};
    margin: ${(props: CasaProps) => props.props ? "auto" : "none"};
    `


export default Casa;