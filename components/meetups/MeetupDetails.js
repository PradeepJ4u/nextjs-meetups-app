import Image from 'next/image';
import styles from './MeetupDetails.module.css'
function MeetupDetails(props) {
  return (
    <section className={styles.details}>
      <Image src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
export default MeetupDetails