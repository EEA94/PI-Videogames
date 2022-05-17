import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Card.module.css'

// export default function Card({name,image,genres,rating,id}){
//     return(
//         <div className={styles.card}>
//             <div className={styles.subCard}>
//                 <Link to={`/videogame/${id}`}>
//                     <img className={styles.cardImg} src={image} alt={name} height='250px' width='200px'/>
//                 </Link>
//             </div>
//             <div className={styles.info}>
//                 <b className={styles.name}>{name}</b><br/>
//                 <b className={styles.titles}>Rating: </b><span>{rating}</span><br/>
//                 <b className={styles.titles}>Genres: </b><span>{genres}.</span>
//             </div>
//         </div>
//     )
// }
export default function Card({name,image,genres,rating,id}){

function colorRating(rtg){
    if(rtg>=0 && rtg<=2) return styles.red
    else if(rtg>2 && rtg<=3) return styles.orange
    else if(rtg>3 && rtg<=3.9) return styles.yellow
    else return styles.green
}

    return(
        <div className={styles.card}>
            <div className={styles.facefront}>
                <img className={styles.cardImg} src={image} alt={name} height='250px' width='200px'/>
                <h3>{name}</h3>
            </div>
            <div className={styles.faceback}>
                <h3>{name}</h3>
                <p className={colorRating(rating)}>{rating}</p>
                <p>{genres}</p>
                <div className={styles.link}>
                <Link to={`/videogame/${id}`}><button className={styles.button}>More details</button></Link>
                </div>
                
            </div>
        </div>
    )
}

