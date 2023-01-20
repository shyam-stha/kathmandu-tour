import { Button } from '@mantine/core'

const StyledButton = ({ children, ...props }: any) => {
    return <Button {...props}>{children}</Button>
}

export default StyledButton
