import { useState } from 'react'
import {
    Button,
    Checkbox,
    Divider,
    Group,
    PasswordInput,
    TextInput,
} from '@mantine/core'
import Logo from '../../components/partial/Logo'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { APILoginUser } from '../../api/authAPI'
import showNotify from '../../utils/notify'

type LoginFormDataType = {
    username: string
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false)
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormDataType>({
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const OnSubmit: SubmitHandler<LoginFormDataType> = async (
        data: LoginFormDataType
    ) => {
        try {
            const res = await APILoginUser(data)
            localStorage.setItem('city-token', res.data.token)
            navigate('/dashboard')
            showNotify('success', 'Logged in successfully')
        } catch (e: any) {
            showNotify('error', e)
        }
    }

    return (
        <div className='flex h-[500px] min-w-[350px] max-w-[380px] flex-col items-center justify-center gap-5 rounded-sm bg-white px-8'>
            <Logo type='black' />
            <div className='w-full'>
                <Divider
                    label={
                        <div className='text-center text-sm text-title-active sm:text-lg'>
                            <h1>Login to</h1>
                            <h1>City Tours</h1>
                        </div>
                    }
                    labelPosition='center'
                    size={'md'}
                    color={'#CA8A04'}
                />
            </div>
            <form
                onSubmit={handleSubmit(OnSubmit)}
                autoComplete='false'>
                <Group spacing={10}>
                    <Controller
                        render={({ field }) => (
                            <TextInput
                                {...field}
                                type='text'
                                size='md'
                                label='Username'
                                placeholder='Enter username'
                                className='w-full'
                                error={errors.username?.message}
                            />
                        )}
                        name='username'
                        control={control}
                        rules={{ required: 'Username is required' }}
                    />
                    <Controller
                        render={({ field }) => (
                            <PasswordInput
                                {...field}
                                type='password'
                                label='Password'
                                size='md'
                                autoComplete='false'
                                placeholder='Enter your password'
                                className='w-full'
                                error={errors.password?.message}
                            />
                        )}
                        name='password'
                        control={control}
                        rules={{ required: 'Password is required' }}
                    />
                    <div className='flex w-full justify-between'>
                        <Checkbox
                            label='Remember me'
                            size='xs'
                            checked={checked}
                            onChange={(e) =>
                                setChecked(e.currentTarget.checked)
                            }
                        />
                        <Link
                            to='/foreget_pwd'
                            className='text-xs text-secondary underline'>
                            Forgot Password?
                        </Link>
                    </div>
                    <Button
                        type='submit'
                        className='my-5 w-full bg-gdt-primary '>
                        Login
                    </Button>
                </Group>
            </form>
        </div>
    )
}

export default Login

//problems
// 1. Mantine Input and checkbox component costomization
