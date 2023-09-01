

function NotFound()
{
    const image = 'https://s3-alpha.figma.com/hub/file/1104003948/5675237c-2620-45de-a5c1-2ed3893c7a56-cover.png';
    
    const styles = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '99.5vh',
        objectFit: 'cover'
    }
    return(
        <>
            <img src={image} alt="Not Found" style={styles} />
        </>
    );
}

export default NotFound;