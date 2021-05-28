import React from 'react';
import Countdown from 'react-countdown';
import styles from './fiesta.module.css';
import preguntas from "./preguntas.json"; // WHERE YOUR POSTS ARE
import Link from "next/link";

export default class Fiesta extends React.Component {

    componentDidMount() {
        console.log(preguntas.data);
    }

    renderer = ({ days, hours, minutes, seconds, completed })=>{
      return <div className={styles.countdown}>
          <div>{days}<span>Días</span></div>
          <div>{hours}<span>Horas</span></div>
          <div>{minutes}<span>Mins</span></div>
          <div>{seconds}<span>Segs</span></div>
      </div>
    } 

    render() {
        return(
            <div className={styles.container}>
                {[...Array(15)].map((x, i) =>
                    <div className={styles.confetti} key={i} ></div>
                )}
                <h1 className={styles.faltan}>Bienvenido a la carrera de observación en el Theodoro Hertzl</h1>
                <h2 className={styles.secondary}>La aplicación ya está lista: <Link href="/fiesta/concurso"><button>Haz click Aquí para empezar</button></Link></h2>
                <h2 className={styles.ciao}>Nos Vemos 😉</h2>
                <h3 className={styles.ciao}>Si quieres hacer un concurso como estos para tu fiesta, Visita: www.sebastian-gomez.com</h3>
            </div>)
    }
}