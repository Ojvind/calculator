
export default (props) => {
    return (
        <span>
            <input type='text' value={props.children}></input>
            <style jsx>{`
                input {
                    width: 30px;
                }`}
            </style>
        </span>
    )
}