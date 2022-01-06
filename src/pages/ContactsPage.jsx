export default function ContactsPage() {

    const styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontWeight: 500,
          fontSize: 40,
          textAlign: 'center',
          color:'#303C6C',
        },
      };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Добро пожаловать в Sport Club ARASTRA 👋🏻</h1>
            <p>Меня зовут Вадим</p>
            <p>мой мобильный: 063 115 12 38</p>
            <a href="https://www.instagram.com/sc_arastra_sambo/">мой инстаграмм</a>
        </div>
    )
}