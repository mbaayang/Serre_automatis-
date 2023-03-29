import './Mesures.css'

function Mesures({user}: {user: any}) {
    return(
        <div className='flex flex-col gap-16 items-start'>
            <div className='flex items-center gap-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className='font-medium text-lg'>{user.prenom} {user.nom}</p>
            </div>
            <div className='flex flex-row gap-14 w-full'>
                <div className='bg-white w-1/3 h-40 rounded-lg drop-shadow-lg'>
                    <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                        <span className='text-white font-medium text-2xl m-0'>Température</span>
                    </div>
                    <div>
                        <span className='flex justify-center m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="50" height="60"
                                viewBox="0 0 48 48">
                                <path d="M 24 3 C 19.605332 3 16 6.6053321 16 11 L 16 26.71875 C 14.224901 28.670026 13 31.158796 13 34 C 13 40.051668 17.948332 45 24 45 C 30.051668 45 35 40.051668 35 34 C 35 31.158796 33.775099 28.670026 32 26.71875 L 32 11 C 32 6.6053321 28.394668 3 24 3 z M 24 7 C 26.233332 7 28 8.7666679 28 11 L 28 27.304688 A 2.0002 2.0002 0 0 0 28.664062 28.792969 C 30.099438 30.080664 31 31.920519 31 34 C 31 37.890332 27.890332 41 24 41 C 20.109668 41 17 37.890332 17 34 C 17 31.920519 17.900562 30.080664 19.335938 28.792969 A 2.0002 2.0002 0 0 0 20 27.304688 L 20 11 C 20 8.7666679 21.766668 7 24 7 z M 23.970703 14.972656 A 2.0002 2.0002 0 0 0 22 17 L 22 29.419922 A 5 5 0 0 0 24 39 A 5 5 0 0 0 26 29.423828 L 26 17 A 2.0002 2.0002 0 0 0 23.970703 14.972656 z"></path>
                            </svg>
                            <span className='font-medium text-3xl m-4'>26 °C</span>
                        </span>
                    </div>
                </div>
                <div className='bg-white w-1/3 h-40 rounded-lg drop-shadow-lg'>
                    <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                        <span className='text-white font-medium text-2xl m-0'>Humidité</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='m-2 text-lg flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="50" height="40"
                            viewBox="0 0 53 53">
                            <path fill="#ededed" d="M50.5,25.1182251c0,3.7999878-3.0900269,6.8900146-6.8900146,6.8900146H10.4299927 C6.0700073,32.0082397,2.5,28.4782104,2.5,24.078186c0-4.3699951,3.5499878-7.9199829,7.9299927-7.9199829 c0.4899902,0,0.960022,0.0499878,1.4299927,0.1300049c-0.0100098-0.1300049-0.0199585-0.2600098-0.0199585-0.3900137 c0-6.289978,5.4599609-11.0599976,11.289978-10.5499878c5.2600098,0.3500366,9.4500122,4.5499878,9.8200073,9.8099976 c0.7600098-1.0199585,1.9799805-1.6799927,3.3499756-1.6799927c2.3200073,0,4.210022,1.8699951,4.210022,4.1900015 c0,0.5100098-0.1000366,0.9899902-0.2600098,1.4400024c0.9899902-0.5599976,2.1400146-0.8800049,3.3599854-0.8800049 C47.4099731,18.2282104,50.5,21.3182373,50.5,25.1182251z"></path><path fill="#dbdbdb" d="M34.4299927,32.0082397H18.5700073c1.1799927-2.3400269,2.8099976-5.0599976,4.8599854-8.1700439 c0.6900024-1.0299683,1.8300171-1.6499634,3.0700073-1.6499634c1.2299805,0,2.3800049,0.6199951,3.0700073,1.6499634 C31.6199951,26.9482422,33.25,29.6682129,34.4299927,32.0082397z"></path><path fill="#00aeff" d="M34.8636055,39.3370056c0,4.6141624-3.749445,8.352169-8.3647728,8.352169 c-4.6267643,0-8.3624382-3.7380066-8.3624382-8.352169c0-3.4244308,4.5832577-10.7944546,6.9636002-14.3912029 c0.6663609-1.0068855,2.1314602-1.0069714,2.7979546-0.0001717C30.278923,28.5423145,34.8636055,35.9125214,34.8636055,39.3370056z"></path><path fill="#fff" d="M23.1418037,39.8054161c-0.2988586-0.3237-0.4482861-0.7565536-0.4482861-1.2993164 c0-0.5427589,0.1494274-0.976368,0.4482861-1.3000679c0.2992344-0.3237,0.6861687-0.4855499,1.1611786-0.4855499 c0.4746342,0,0.8600616,0.16185,1.1562862,0.4855499c0.295845,0.3237,0.4437695,0.757309,0.4437695,1.3000679 c0,0.5427628-0.1479244,0.9756165-0.4437695,1.2993164c-0.2962246,0.3237-0.6816521,0.4855499-1.1562862,0.4855499 C23.8279724,40.290966,23.4410381,40.1291161,23.1418037,39.8054161z M24.7979412,39.2739487 c0.1200714-0.1731415,0.180294-0.4290924,0.180294-0.767849c0-0.3395081-0.0602226-0.5954552-0.180294-0.7678452 c-0.1204453-0.1723862-0.2853069-0.2589607-0.4949589-0.2589607c-0.2036304,0-0.3669853,0.087326-0.4904423,0.2634773 c-0.1234589,0.1753998-0.1848106,0.4298439-0.1848106,0.7633286c0,0.3327332,0.0613518,0.5871773,0.1848106,0.7625771 c0.123457,0.1761551,0.2868118,0.2642288,0.4904423,0.2642288C24.5126343,39.5329056,24.677496,39.4463348,24.7979412,39.2739487z M28.1602783,36.7942581h1.100956l-4.4218884,6.4754982h-1.1005802L28.1602783,36.7942581z M27.868948,43.1267281 c-0.2439041-0.1452904-0.4332294-0.3530617-0.569109-0.6248169c-0.1355019-0.2710037-0.2032528-0.5856705-0.2032528-0.9432449 c0-0.3575783,0.0677509-0.6722412,0.2032528-0.9440002c0.1358795-0.2710037,0.3252048-0.4795265,0.569109-0.6240616 c0.2435284-0.1445351,0.5194263-0.217556,0.8276939-0.217556c0.4750099,0,0.8619442,0.16185,1.1611786,0.4855499 c0.2988567,0.3236961,0.4486618,0.7573051,0.4486618,1.3000679c0,0.5427589-0.1498051,0.9756165-0.4486618,1.2993126 c-0.2992344,0.3237-0.6861687,0.4855499-1.1611786,0.4855499C28.3883743,43.3435287,28.1124763,43.2712631,27.868948,43.1267281z M29.1916008,42.3212395c0.1204472-0.1753998,0.180294-0.4298401,0.180294-0.7625732 c0-0.3334885-0.0598469-0.5879288-0.180294-0.7633286c-0.1200695-0.1761551-0.2853069-0.2634773-0.4949589-0.2634773 c-0.2032547,0-0.3669853,0.0865707-0.4900665,0.2589569c-0.1234589,0.17239-0.1851864,0.4283409-0.1851864,0.767849 c0,0.3387527,0.0617275,0.5947037,0.1851864,0.7678452c0.1230812,0.17239,0.2868118,0.2589607,0.4900665,0.2589607 C28.9062939,42.5854721,29.0715313,42.4973946,29.1916008,42.3212395z"></path>
                            </svg>Ambiante: <span className='font-medium text-2xl ml-4'>65 %</span>
                        </span>
                        <span className='m-2 text-lg flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="50" height="30"
                            viewBox="0 0 64 64">
                            <path d="M 31.960938 4.0117188 A 1.029 1.029 0 0 0 31.289062 4.296875 C 30.501062 5.091775 12 23.9463 12 40 A 20 20 0 0 0 52 40 C 52 23.9463 33.498938 5.091775 32.710938 4.296875 A 1.029 1.029 0 0 0 31.960938 4.0117188 z M 37.972656 27 A 1 1 0 0 1 38.800781 28.599609 L 26.800781 44.599609 A 1 1 0 0 1 25.199219 43.400391 L 37.199219 27.400391 A 1 1 0 0 1 37.972656 27 z M 27.117188 27.001953 A 4 4 0 0 1 27 35 A 4.0039 4.0039 0 0 1 23 31 A 4 4 0 0 1 27.117188 27.001953 z M 27 29 A 2 2 0 0 0 27 33 A 2 2 0 0 0 27 29 z M 37.117188 37.001953 A 4 4 0 0 1 37 45 A 4.0039 4.0039 0 0 1 33 41 A 4 4 0 0 1 37.117188 37.001953 z M 37 39 A 2 2 0 0 0 37 43 A 2 2 0 0 0 37 39 z M 45.914062 44.683594 A 1 1 0 0 1 46.814453 46.050781 A 16.083 16.083 0 0 1 37.876953 54.884766 A 0.9883 0.9883 0 0 1 37.509766 54.955078 A 1 1 0 0 1 37.142578 53.025391 A 14.0834 14.0834 0 0 0 44.964844 45.294922 A 1 1 0 0 1 45.914062 44.683594 z"></path>
                        </svg>Sol: <span className='font-medium text-2xl ml-4'>45 %</span>
                        </span>
                    </div>
                </div>
                <div className='bg-white w-1/3 h-40 rounded-lg drop-shadow-lg'>
                    <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                        <span className='text-white font-medium text-2xl m-0'>Luminosité</span>
                    </div>
                    <div>
                        <span className='flex justify-center m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="50" height="50"
                            viewBox="0 0 512 512">
                            <path d="M 255.70703 18.003906 A 10 10 0 0 0 246 28 L 246 74.544922 A 10 10 0 0 0 256 84.544922 A 10 10 0 0 0 266 74.544922 L 266 28 A 10 10 0 0 0 255.70703 18.003906 z M 425.27539 84.732422 A 10 10 0 0 0 418.44922 87.537109 L 383.73047 120.5918 A 10 10 0 0 0 390.63086 137.83398 A 9.967 9.967 0 0 0 397.51953 135.07617 L 432.23828 102.02344 A 10 10 0 0 0 425.27539 84.732422 z M 86.283203 84.736328 A 10 10 0 0 0 79.761719 102.02344 L 114.48047 135.07617 A 10.000104 10.000104 0 0 0 128.26953 120.5918 L 93.550781 87.537109 A 10 10 0 0 0 86.283203 84.736328 z M 256 98.273438 C 164.923 98.273438 90.826172 169.029 90.826172 256 C 90.826172 342.971 164.923 413.72656 256 413.72656 C 347.077 413.72656 421.17383 342.971 421.17383 256 C 421.17383 169.029 347.077 98.273438 256 98.273438 z M 256 118.27344 C 336.049 118.27344 401.17383 180.057 401.17383 256 C 401.17383 331.943 336.049 393.72656 256 393.72656 C 175.951 393.72656 110.82617 331.943 110.82617 256 C 110.82617 180.057 175.951 118.27344 256 118.27344 z M 16.509766 246 A 10 10 0 0 0 16.509766 266 L 65.400391 266 A 10 10 0 0 0 75.400391 256 A 10 10 0 0 0 65.400391 246 L 16.509766 246 z M 446.59961 246 A 10 10 0 0 0 446.59961 266 L 495.49023 266 A 10 10 0 0 0 495.49023 246 L 446.59961 246 z M 121.17969 374.16992 A 10.000104 10.000104 0 0 0 114.48047 376.92383 L 79.761719 409.97656 A 10 10 0 1 0 93.550781 424.46094 L 128.26953 391.4082 A 10.000104 10.000104 0 0 0 121.17969 374.16992 z M 390.23438 374.17188 A 10.000104 10.000104 0 0 0 383.73047 391.4082 L 418.44922 424.46094 A 10 10 0 1 0 432.23828 409.97656 L 397.51953 376.92383 A 10.000104 10.000104 0 0 0 390.23438 374.17188 z M 255.70703 427.46094 A 10 10 0 0 0 246 437.45508 L 246 484 A 10 10 0 0 0 266 484 L 266 437.45508 A 10 10 0 0 0 255.70703 427.46094 z"></path>
                            </svg>
                            <span className='font-medium text-3xl m-4'>17 Lux</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
  
  }
  
  export default Mesures