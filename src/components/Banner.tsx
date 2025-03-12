import styles from './banner.module.css'
import Image from 'next/image'

const Banner = ({img, alt} : {img :string, alt: string}) => {
  return (
    <div className={styles.banner}>
        <Image 
            src={img} 
            alt={alt} 
            fill={true}
            priority
            objectFit='cover'
            className={styles.bannerimg}
        />
        <div className={styles.bannerText}>
            <h1><span className={styles.gradientText}>where every event finds its venue</span></h1>
            <h3>Finding the perfect venue has never been easier. Whether it’s a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
        </div>
    </div>
  )
}

export default Banner