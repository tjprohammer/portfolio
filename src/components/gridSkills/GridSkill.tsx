import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

type Props = {};

const GridSkills = (props: Props) => {
    return (
        <Container
            sx={{
                maxWidth: ' 400px',
                width: '400px',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'
            }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                                width="6em"
                                height="6em">
                                <path
                                    fill="#4e7ab5"
                                    d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
                                />
                                <path
                                    fill="#4e7ab5"
                                    d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
                                />
                                <path
                                    fill="#4e7ab5"
                                    d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
                                />
                                <path
                                    fill="#8bb7f0"
                                    d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                                />
                                <path
                                    fill="#4e7ab5"
                                    d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                                />
                                <path
                                    fill="#8bb7f0"
                                    d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
                                />
                                <path
                                    fill="#8bb7f0"
                                    d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
                                />
                                <g>
                                    <path
                                        fill="#8bb7f0"
                                        d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
                                    />
                                </g>
                            </svg>
                            <Typography variant="h6">React JS</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="6em"
                                height="6em">
                                <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
                                <polygon
                                    fill="#fff"
                                    points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                                />
                                <path
                                    fill="#fff"
                                    d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                                />
                            </svg>
                            <Typography variant="h6">Typescript</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="6em"
                                height="6em">
                                <path
                                    fill="#388e3c"
                                    d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                                />
                                <path
                                    fill="#37474f"
                                    d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                                />
                                <path
                                    fill="#2e7d32"
                                    d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                                />
                                <path
                                    fill="#4caf50"
                                    d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                                />
                                <path
                                    fill="#37474f"
                                    d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                                />
                            </svg>
                            <Typography variant="h6">Node JS</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="6em"
                                height="6em">
                                <path
                                    fill="#5d4037"
                                    d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                                />
                                <path
                                    fill="#4caf50"
                                    d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                                />
                                <path fill="#dcedc8" d="M23 28H25V36H23z" />
                                <path
                                    fill="#4caf50"
                                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                                />
                                <path
                                    fill="#81c784"
                                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                                />
                            </svg>
                            <Typography variant="h6">MongoDB</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="6em"
                                height="6em">
                                <path
                                    fill="#252f3e"
                                    d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
                                />
                                <path
                                    fill="#f90"
                                    d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
                                />
                            </svg>
                            <Typography variant="h6">AWS</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="6em"
                                height="6em">
                                <path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.581015 12.484998 30.154506 14.841797 33.492188 C 14.278671 34.225786 14 35.114721 14 36 C 14 36.972222 14.318681 37.957881 15.001953 38.726562 C 15.685226 39.495244 16.75 40 18 40 C 19.25 40 20.314774 39.495244 20.998047 38.726562 C 21.681319 37.957881 22 36.972222 22 36 C 22 35.027778 21.681319 34.042119 20.998047 33.273438 C 20.314774 32.504756 19.25 32 18 32 C 17.417923 32 16.88232 32.117915 16.400391 32.3125 C 14.317709 29.317793 13 25.144037 13 20.486328 C 13 11.395328 17.935 4 24 4 C 29.419 4 33.923219 9.9093906 34.824219 17.650391 C 35.531219 17.919391 36.232734 18.222641 36.927734 18.556641 C 36.246734 9.2666406 30.71 2 24 2 z M 22 15 C 20.75 15 19.685226 15.504756 19.001953 16.273438 C 18.318681 17.042119 18 18.027778 18 19 C 18 19.972222 18.318681 20.957881 19.001953 21.726562 C 19.685226 22.495244 20.75 23 22 23 C 23.25 23 24.314774 22.495244 24.998047 21.726562 C 25.425092 21.246137 25.694239 20.67767 25.847656 20.083984 C 29.425245 19.930128 33.445887 20.987107 37.142578 23.203125 C 45.036578 27.935125 49.012859 36.186703 46.005859 41.595703 C 44.931859 43.526703 43.056938 44.897594 40.585938 45.558594 C 37.123937 46.486594 32.8715 45.916078 28.8125 44.080078 C 28.2265 44.551078 27.60675 44.996734 26.96875 45.427734 C 30.29375 47.106734 33.8125 47.996094 37.0625 47.996094 C 38.4735 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.277906 36.224406 46.978922 26.769281 38.169922 21.488281 C 34.19387 19.103202 29.825568 17.936523 25.886719 18.064453 C 25.744166 17.416386 25.4608 16.794034 24.998047 16.273438 C 24.314774 15.504756 23.25 15 22 15 z M 22 17 C 22.749999 17 23.185226 17.245244 23.501953 17.601562 C 23.81868 17.957881 24 18.472222 24 19 C 24 19.527778 23.81868 20.042119 23.501953 20.398438 C 23.185226 20.754756 22.749999 21 22 21 C 21.250001 21 20.814774 20.754756 20.498047 20.398438 C 20.18132 20.042119 20 19.527778 20 19 C 20 18.472222 20.18132 17.957881 20.498047 17.601562 C 20.814774 17.245244 21.250001 17 22 17 z M 9.1621094 23.332031 C 2.1981094 28.772031 -0.89795313 36.906406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.683281 8.8984375 47.488281 C 10.169438 47.828281 11.528453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.911031 46.787719 24.707031 44.511719 C 29.262758 41.780488 32.543671 37.933128 34.212891 33.978516 C 35.367764 33.923167 36.355158 33.449812 36.998047 32.726562 C 37.681319 31.957881 38 30.972222 38 30 C 38 29.027778 37.681319 28.042118 36.998047 27.273438 C 36.314774 26.504756 35.25 26 34 26 C 32.75 26 31.685226 26.504756 31.001953 27.273438 C 30.318681 28.042119 30 29.027778 30 30 C 30 30.972222 30.318681 31.957882 31.001953 32.726562 C 31.334027 33.100145 31.760237 33.407648 32.25 33.628906 C 30.681548 37.037695 27.715244 40.376565 23.677734 42.796875 C 18.927734 45.645875 13.596062 46.678594 9.4140625 45.558594 C 6.9420625 44.896594 5.0690938 43.526703 3.9960938 41.595703 C 1.4540938 37.022703 3.9149531 30.427766 9.5019531 25.634766 C 9.3569531 24.883766 9.2441094 24.114031 9.1621094 23.332031 z M 34 28 C 34.749999 28 35.185226 28.245244 35.501953 28.601562 C 35.81868 28.957881 36 29.472222 36 30 C 36 30.527778 35.81868 31.042118 35.501953 31.398438 C 35.185226 31.754756 34.749999 32 34 32 C 33.250001 32 32.814774 31.754756 32.498047 31.398438 C 32.18132 31.042119 32 30.527778 32 30 C 32 29.472222 32.18132 28.957882 32.498047 28.601562 C 32.814774 28.245244 33.250001 28 34 28 z M 18 34 C 18.749999 34 19.185226 34.245244 19.501953 34.601562 C 19.81868 34.957881 20 35.472222 20 36 C 20 36.527778 19.81868 37.042119 19.501953 37.398438 C 19.185226 37.754756 18.749999 38 18 38 C 17.250001 38 16.814774 37.754756 16.498047 37.398438 C 16.18132 37.042119 16 36.527778 16 36 C 16 35.472222 16.18132 34.957881 16.498047 34.601562 C 16.814774 34.245244 17.250001 34 18 34 z" />
                            </svg>
                            <Typography variant="h6">Redux</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            maxWidth: '12em',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="6em"
                                height="6em">
                                <polygon
                                    fill="#43a047"
                                    points="43,35.112 43,13.336 24,2.447 5,13.336 5,35.112 24,46"
                                />
                                <path
                                    fill="#fff"
                                    d="M32.5,13c-1.381,0-2.5,1.119-2.5,2.5v11.276L18.984,14.453l-0.131-0.152 C17.609,12.938,16.187,13,15.5,13c-1.381,0-2.5,1.119-2.5,2.5v17c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5V21.141 l11.278,12.627l0.11,0.142C30.62,35.133,32.295,35,32.5,35c1.381,0,2.5-1.119,2.5-2.5v-17C35,14.119,33.881,13,32.5,13z"
                                />
                            </svg>
                            <Typography variant="h6">Nginx</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            maxWidth: '12em',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="6em"
                                height="6em">
                                <path
                                    fill="#03A9F4"
                                    d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484C43.162,18.533,41.339,18.978,40,20z"
                                />
                                <path
                                    fill="#0288D1"
                                    d="M2.165,28C2.9,32.739,5.983,40,18,40c12.185,0,17.523-7.33,19.682-12H2.165z"
                                />
                                <path
                                    fill="#81D4FA"
                                    d="M19.812,39.938C18.892,39.616,14.74,38.848,14,33c-4.209,1.863-7.938,1.375-9.579,1.008C6.583,37.237,10.591,40,18,40C18.623,40,19.224,39.976,19.812,39.938z"
                                />
                                <path fill="#FFF" d="M18 30A2 2 0 1 0 18 34A2 2 0 1 0 18 30Z" />
                                <path
                                    fill="#37474F"
                                    d="M14.914,33.597c0.224,0.505,0.02,1.162-0.51,1.318c-3.301,0.973-6.146,1.102-8.297,1.102c-0.644-0.619-1.194-1.279-1.656-1.963c2.585,0,6.71-0.12,9.144-0.966C14.117,32.906,14.69,33.09,14.914,33.597z M2,27c0,0,1.875,0.125,3-1c1.875,1.688,5.94,1.088,7,0c1.063,1.688,6.938,1.375,8,0c1.25,1.438,6.625,1.75,8,0c0.479,1.461,6.819,1.874,8,0c1.061,1.088,5.063,1.938,7.311,0C43.875,27.188,46,27,46,27v1H2 M17,32c0,0.552,0.448,1,1,1s1-0.448,1-1s-0.448-1-1-1S17,31.448,17,32z"
                                />
                                <path
                                    fill="#01579B"
                                    d="M11,24H6v-5h5V24z M21,19h-5v5h5V19z M31,19h-5v5h5V19z M16,14h-5v5h5V14z M26,14h-5v5h5V14z"
                                />
                                <path
                                    fill="#0288D1"
                                    d="M16,24h-5v-5h5V24z M26,19h-5v5h5V19z M26,9h-5v5h5V9z M21,14h-5v5h5V14z"
                                />
                            </svg>
                            <Typography variant="h6">Docker</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            maxWidth: '12em',
                            boxShadow:
                                '0px 2px 1px 2px rgb(0 0 0 / 40%), 0px 4px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%)'
                        }}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="6em" height="6em">
                                <style></style>
                                <g
                                    transform="matrix(.826767 0 0 .826767 8.416322 51.138164)"
                                    className="C">
                                    <path
                                        d="M39.1 15.557v-24.43l-21.16-12.22v24.43zm0-27.1l-21.16-12.22v-24.44l21.16 12.22z"
                                        fill="#5c4ee5"
                                    />
                                    <path
                                        d="M62.6-23.773v-24.44l-21.17 12.22v24.44z"
                                        fill="#4040b2"
                                    />
                                    <g fill="#5c4ee5">
                                        <path d="M15.62-25.193v-24.44l-21.16-12.22v24.44z" />
                                        <path d="M53.64-.483" />
                                        <path d="M17.94-21.093" />
                                    </g>
                                </g>
                            </svg>
                            <Typography variant="h6">Terraform</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GridSkills;
