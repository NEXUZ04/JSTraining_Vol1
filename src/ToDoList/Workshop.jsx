import { useState } from "react"


const Workshop = () => {
    const [currentTask, setTask] = useState("")
    const [taskList, setList] = useState([])
    const [killList, setKillList] = useState([])
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th><TaskInput currentTask={currentTask} onSetTask={event => setTask(event.target.value)} /></th>
                        <th><button onClick={() => {
                            const ct = currentTask
                            const arr = [ct]
                            const newList = taskList.concat([arr])
                            
                            setList(newList)
                            setTask("")}}>
                                Add
                            </button>
                        </th>
                    </tr>
                </thead>
            </table>
            <Message taskLength={taskList.length} killLength={killList.length}/>
            

            {taskList.map(t =>
                <ShowList index={taskList.indexOf(t).toString()} task={t} onSetKillList={() => {
                    const kt = killList
                    const karr = [kt]
                    const newKillList = killList.concat([karr])

                    setKillList(newKillList)}}/> )}      
        </div>
    )
}

const TaskInput = ({ currentTask, onSetTask }) => {
    return (
        <div>
            <input type="text" value={currentTask} onChange={onSetTask} />
        </div>
    )
}

const Message = ({taskLength, killLength}) => {
    return (
        <div>
            {taskLength - killLength} remaining out of {taskLength} tasks
        </div>
    )
}

const ShowList = ({index, task, onSetKillList}) => {
    return (
            <div>
                <ul><il key={index}><h5 onClick={onSetKillList}>{task}</h5></il></ul>
            </div>
    )
}

function ShowKillList(index, task) {

    return (
            <div>
                <ul><s><il key={index}><h5>{task}</h5></il></s></ul>
            </div>
    )
}


export default Workshop