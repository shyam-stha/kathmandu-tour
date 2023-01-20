import { Route } from 'react-router-dom'
import IsAuth from '../hoc/IsAuth'
import DashboardLayout from '../layouts/DashboardLayout'
import BlogAdmin from '../pages/dashboard/blog/BlogAdmin'
import Dashboard from '../pages/dashboard/Dashboard'
import AddBlog from '../components/container/dashboard/AddBlog'
import BlogListAdmin from '../components/container/dashboard/BlogListAdmin'
import BlogEdit from '../pages/dashboard/blog/BlogEdit'

const Private = (
    <>
        <Route
            path='/dashboard'
            element={
                <IsAuth>
                    <DashboardLayout />
                </IsAuth>
            }>
            <Route
                index
                element={<Dashboard />}
            />
            {/* <Route path='calender' element={} /> */}
            {/* <Route path='package' element={} /> */}
            {/* <Route path='bookin' element={} /> */}
            {/* <Route path='schedule' element={} /> */}
            <Route
                path='blog'
                element={<BlogAdmin />}>
                <Route
                    index
                    element={<BlogListAdmin />}
                />
                <Route
                    path='add_blog'
                    element={<AddBlog />}
                />

                <Route
                    path='detail/:blogId'
                    element={<BlogEdit />}
                />
            </Route>
            {/* <Route path='payment' element={} /> */}
        </Route>
    </>
)

export default Private
