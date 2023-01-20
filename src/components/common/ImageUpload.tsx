import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { Group, Modal, Text, useMantineTheme } from '@mantine/core'
import { IconCloudUpload, IconEye, IconUpload, IconX } from '@tabler/icons'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

const ImageUpload = ({
    control,
    setValue,
    errors,
    getValues,
    value,
    handleLoading,
    final,
    index,
    keys,
}: any) => {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [uploadCoverImg, setUploadCoverImg] = useState('')
    const [invalid, setInvalid] = useState(false)

    return (
        <>
            <div>
                <Controller
                    name={value}
                    control={control}
                    rules={{
                        required: 'Required',
                    }}
                    defaultValue={''}
                    render={() => (
                        <Dropzone
                            loading={isLoading}
                            onDrop={(files) => {
                                handleLoading(true)
                                let formData = new FormData()
                                // formData.append('app', 'TRAVELNEPAL');
                                formData.append('fileType', 'LEGALDOCUMENTS')
                                formData.append('userId', '1')
                                formData.append('image', files[0])
                                setIsLoading(true)
                                setInvalid(false)
                                fetch(
                                    'https://abfimage.damipasal.com/storeImage',
                                    {
                                        method: 'POST',
                                        body: formData,
                                    }
                                )
                                    .then((res) => {
                                        const respJson = res.json()
                                        setIsLoading(false)
                                        return respJson
                                    })
                                    .then((res) => {
                                        // if (value !== 'achievements') {
                                        //     con
                                        //     form.values[value] = res.data.Location;
                                        // } else {
                                        // form.values[value].achievementImg = res.data.Location;
                                        // }
                                        if (keys) {
                                            // console.log(
                                            //     'inside',
                                            //     final[index][keys],
                                            //     // getValues(final[index][keys]),
                                            // );
                                            setValue(
                                                `${final}.${index}.${keys}`,
                                                res.data.Location
                                            )
                                            // console.log('outside', getValues(final[index][keys]));
                                        } else {
                                            setValue(value, res?.data?.Location)
                                        }
                                        setUploadCoverImg(res?.data?.Location)
                                        handleLoading(false)
                                    })
                                    .catch(() => {
                                        // TODO: Update ui and states with error....
                                    })
                            }}
                            onReject={() => setInvalid(true)}
                            maxSize={1 * 1024 ** 2}
                            accept={IMAGE_MIME_TYPE}>
                            <Group
                                position='center'
                                spacing='xl'
                                style={{
                                    minHeight: 220,
                                    pointerEvents: 'none',
                                }}>
                                <Dropzone.Accept>
                                    <IconUpload
                                        size={50}
                                        stroke={1.5}
                                        color={
                                            theme.colors[theme.primaryColor][
                                                theme.colorScheme === 'dark'
                                                    ? 4
                                                    : 6
                                            ]
                                        }
                                    />
                                </Dropzone.Accept>
                                <Dropzone.Reject>
                                    <IconX
                                        size={50}
                                        stroke={1.5}
                                        color={
                                            theme.colors.red[
                                                theme.colorScheme === 'dark'
                                                    ? 4
                                                    : 6
                                            ]
                                        }
                                    />
                                </Dropzone.Reject>
                                <Dropzone.Idle>
                                    <IconCloudUpload
                                        size={50}
                                        stroke={1.5}
                                    />
                                </Dropzone.Idle>

                                <div>
                                    <Text
                                        size='xl'
                                        inline>
                                        Drag image here or click to select file
                                    </Text>
                                    <Text
                                        size='sm'
                                        color='dimmed'
                                        inline
                                        mt={7}>
                                        File should not exceed 1 mB
                                    </Text>
                                </div>
                            </Group>
                        </Dropzone>
                    )}
                />
            </div>
            {!!keys &&
                !uploadCoverImg &&
                !!errors &&
                errors[final] &&
                errors[final][index] && (
                    <div className={'pt-2 text-red-500'}>
                        Image is required *
                    </div>
                )}
            {invalid && (
                <div className={'pt-2 text-primary'}>
                    Invalid image format !!
                </div>
            )}
            {!keys && !uploadCoverImg && errors[value] && (
                <div className={'pt-2 text-red-500'}>Image is required *</div>
            )}

            {!keys && getValues(value) && (
                <div className={'relative pt-4'}>
                    <div
                        className={
                            'absolute top-9  left-11 flex flex-col items-center hover:z-50 '
                        }>
                        <div>
                            <IconEye
                                size={40}
                                stroke={1.5}
                            />
                        </div>
                    </div>

                    <img
                        src={getValues(value)}
                        alt={'product-image'}
                        loading={'lazy'}
                        height={'200px'}
                        width={'130px'}
                        onClick={() => setOpened(!opened)}
                        className={
                            'cursor-pointer hover:opacity-70  hover:transition hover:ease-in'
                        }
                    />
                </div>
            )}

            {!!keys &&
                getValues(final) &&
                getValues(final)[index] &&
                getValues(final)[index][keys] && (
                    <div className={'relative pt-4'}>
                        <div
                            className={
                                ' absolute top-12 left-8  flex flex-col items-center hover:z-50 '
                            }>
                            <div>
                                <IconEye
                                    size={40}
                                    stroke={1.5}
                                />
                            </div>
                        </div>
                        <img
                            src={getValues(`${final}.${index}.${keys}`)}
                            alt={'certification-image'}
                            loading={'lazy'}
                            height={'100px'}
                            width={'100px'}
                            onClick={() => setOpened(!opened)}
                            className={
                                'cursor-pointer hover:opacity-70  hover:transition hover:ease-in'
                            }
                        />
                    </div>
                )}
            {!keys && getValues(value) && (
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    centered
                    size={'600px'}>
                    <img
                        src={getValues(value)}
                        alt={'certification-image'}
                        height={'100%'}
                        width={'100%'}
                    />
                </Modal>
            )}
            {!!keys && getValues(value) && (
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    centered
                    size={'600px'}>
                    <img
                        src={getValues(`${final}.${index}.${keys}`)}
                        alt={'certification-image'}
                        height={'100%'}
                        width={'100%'}
                    />
                </Modal>
            )}
        </>
    )
}

export default ImageUpload
