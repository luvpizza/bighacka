import "./PoolReport.scss"
const PoolReport = ({id, title, date, status}) => {

    const convertDate = (date) => {
        // Прописать конвертацию даты
    }

    const checkStatus = (status) => {
        if (Number(status) === 1) {
            return (
                <div className="status-ok">Одобрено</div>
            )
        } else if (Number(status) === 2) {
            return (
                <div className="status-warn">На рассмотрении</div>
            )
        }
    }

    return (
        <div className="moderator-page pool-report" data-id={id}>
            <h1 className="pool-report__title">{title}</h1>
            <div className="pool-report__data">
                <h1 className="pool-report__date">{date}</h1>
                <h1 className="pool-report__id">{id}</h1>
            </div>
            {checkStatus(status)}
            {console.log(status)}
        </div>
    );
}

export default PoolReport;