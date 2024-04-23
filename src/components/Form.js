import classes from './Form.module.css'
const Form=(props)=>{
    console.log('inside form')
    const addmovie=(event)=>{
        
        event.preventDefault()
        const obj = {
            title:event.target.elements.tittle.value,
            openingText:event.target.elements.open.value,
            releaseDate:event.target.elements.date.value
        }
        console.log(obj)
        props.onAdd(obj)

    }
    return(
        <div className={classes.modal}>
            <form onSubmit={addmovie}>
                <label htmlFor='tittle'>Title</label>
                <input id='tittle' type="text"></input>
                <label htmlFor='open'>opening text</label>
                <input id='open' type="text"></input>
                <label htmlFor='date'>Release Date</label>
                <input id='date' type="date"></input>
                <button type='submit' >add Movie</button>
            </form>
        </div>
    )

}
export default Form