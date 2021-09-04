import styles from './styles.module.scss';

type ContainerProps = {
  children: any
}

export function Container(props: ContainerProps) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}