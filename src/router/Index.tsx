import { Routes } from 'react-router-dom'
import Public from './Public'
import Private from './Private'

const Router = (
    <Routes>
        {Public}
        {Private}
    </Routes>
)

export default Router
