export default function Stuff({_id,title,summary,cover,content,createdAt}){
    console.log('cock',title)
    return(
        <div className='entry'>
            {cover}
            <div className='txt'>
                Hello
                <h1>{title}</h1>
                <p className='info'>
                <a className='author'> David Diez</a>
                <time>{createdAt}</time>
                </p>
                <p className='sum'>{summary}</p>
            </div>
        </div>
    )
}