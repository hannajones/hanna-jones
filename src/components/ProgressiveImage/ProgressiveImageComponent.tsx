import * as React from 'react';
import * as cx from 'classnames';
import './ProgressiveImageStyles.scss';

interface ProgressiveImage {
  src: string;
  alt?: string;
}

interface ProgressiveImageProps {
  thumb?: ProgressiveImage;
  main: ProgressiveImage;
  className?: string;
}

const ProgressiveImage: React.FunctionComponent<ProgressiveImageProps> = ({ thumb, main, className }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    function handleLoadImage() {
      const img = new Image();
      img.onload = () => setLoaded(true);
      img.src = main.src;
    }

    if (!loaded) {
      handleLoadImage();
    }

    return () => setLoaded(false);
  }, []);

  return (
    <div className={cx('progressiveImage', className)}>
      <div className="progressiveImage__container">
        {
          loaded &&
          <img src={main.src} alt={main.alt} className="progressiveImage__img progressiveImage__img--main" />
        }
        {
          thumb ?
          <img src={thumb.src} alt={thumb.alt} className={cx('progressiveImage__img progressiveImage__img--thumb', { 'progressiveImage__img--hidden' : loaded })} /> :
          <img src="s3://hanna-jones-photos/default-placeholder.jpg" className={cx('progressiveImage__img progressiveImage__img--thumb', { 'progressiveImage__img--hidden' : loaded })} />
        }
      </div>
    </div>
  );
};

export default ProgressiveImage;
