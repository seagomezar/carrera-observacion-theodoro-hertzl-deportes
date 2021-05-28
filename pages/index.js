import React from 'react';
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
                <h2 className={styles.secondary}>La aplicación ya está lista: <Link href="/concurso"><button>Haz click Aquí para empezar</button></Link></h2>
                <h2 className={styles.ciao}>Buenas Suerte 😉</h2>
                <p className={styles.bottom}>Hecho con ❤️ por www.sebastian-gomez.com, si quieres organizar un concurso como estos visita: 
                    <a href="https://www.sebastian-gomez.com" target="_blank">Sebatian-Gomez.com</a>
                </p>
                <img src="/col-aa.png" width="150px" />
            </div>)
    }
}