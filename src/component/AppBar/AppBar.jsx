import Navigation from '../Navigation'

export default function AppBar () {

    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #303C6C',
        },
      };

    return (
        <header style={styles.header}>
            <Navigation />
        </header>
    )
}