import s from './loader.module.css';
export const LoadingScreen = () => {
  return (
    <div className={s['lds-center']}>
      <div className={s['lds-default']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
