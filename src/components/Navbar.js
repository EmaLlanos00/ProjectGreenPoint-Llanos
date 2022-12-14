/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ArrowRightCircleIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ModalContex } from '../contexts/ModalContex';


const solutions = [//Este array venía en el componente. Lo aproveché para reescrbir su contenido. Muestra entre otras cosas a los filtros de productos.
  {
    name: 'Frutos secos',
    description: 'Frutos secos y semillas, fruta deshidratada, mixes.',
    to: `/category/nuts`,
    icon: ArrowRightCircleIcon,
  },
  {
    name: 'Celíacos',
    description: 'Bebidas e infuciones, harinas, fideos, arroces, etc.',
    to: `/category/celiac`,
    icon: ArrowRightCircleIcon,
  },
  { name: 'Desayuno', description: "Granola, panes, galletitas, leches, endulzantes.", to: `/category/breakfast`, icon: ArrowRightCircleIcon },
  {
    name: 'Congelados',
    description: "Productos que requieren cadena de frío, no se envían al interior.",
    to: `/category/frozen`,
    icon: ArrowRightCircleIcon,
  },
  {
    name: 'Vegano',
    description: 'Hummus, tofu, semillas, hongos, golosinas.',
    to: `/category/vegan`,
    icon: ArrowRightCircleIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {//Componente sofisticado extraído de TailwindUI. Se ha purgado código, linkeado y estilizado apropiadamente.
  //En la línea 138 se muestra el componente CardWidget de manera condicional.
  const ctx = useContext(CartContext);
  const modalCtx = useContext(ModalContex);
  const nameData = JSON.parse(localStorage.getItem('formNameValues'))

  return (
    <Popover className="sticky top-0 bg-yellow-300 z-50 border-yellow-400 border-b-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={`/`}>
              <span className="sr-only">Hola</span>
              <img
                className=" h-12 w-auto sm:h-16"
                src="https://i.ibb.co/58kSw4N/logo-Store.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden flex">
            {(ctx.cartList.length != 0) && <Link to={'/cart'} className="flex items-end mr-4">
              <div className="h-6 w-6 flex-shrink-0 text-black mr-5 -z-10" aria-hidden="true" ><CartWidget /></div>
            </Link>
            }
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-yellow-300 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Productos</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.to}
                            ><Popover.Button as='div'>
                                <div className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">

                                  <item.icon className="h-6 w-6 flex-shrink-0 text-yellow-600" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </div>
                              </Popover.Button>
                            </NavLink>
                          ))}

                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to={'/locations'} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Sucursales
            </Link>
            <Link to={`/contact`} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contacto
            </Link>
            {(ctx.cartList.length != 0) && <Link to={'/cart'} >
              <div className="h-6 w-6 flex-shrink-0 text-black" aria-hidden="true" ><CartWidget /></div>
            </Link>
            }
          </Popover.Group>

          {modalCtx.formStep === 5 ?
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <span className='text-gray-900 text-base font-medium mr-5'>Hola {nameData.user} {nameData.lastName}!</span>
              <div className="tooltip hover:tooltip-open tooltip-bottom tooltip-error" data-tip="borrar cuenta">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span className='text-xl  cursor-pointer' onClick={() => { localStorage.clear(); modalCtx.changeSignUpForm(1) }}>{nameData.user.slice(0, 1)} {nameData.lastName.slice(0, 1)}</span>
                  </div>
                </div>
              </div>
            </div>
            : <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => { modalCtx.openModal(); modalCtx.swapSignIn() }}>
                Inicia sesión
              </Link>
              <Link
                onClick={() => { modalCtx.openModal(); modalCtx.swapSignUp() }}
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
              >

                Registrarse
              </Link>
            </div>
          }
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-full m-2"
                    src="https://i.ibb.co/58kSw4N/logo-Store.png"
                    alt="logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">

                <nav className="grid gap-y-8">
                  {solutions.map((item) => (

                    <NavLink
                      key={item.name}
                      to={item.to}

                    ><Popover.Button as="div">
                        <div className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <item.icon className="h-6 w-6 flex-shrink-0 text-yellow-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </div>
                      </Popover.Button>
                    </NavLink>

                  ))}
                </nav>

              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to={`/locations`} className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Sucursales
                </Link>

                <Link to={`/contact`} className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contacto
                </Link>
              </div>
              <div>
                <Link

                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green
                  -700" onClick={() => { modalCtx.openModal(); modalCtx.swapSignUp() }}
                >
                  Crear cuenta
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  ¿Ya tiene usuario?{' '}
                  <Link onClick={() => { modalCtx.openModal(); modalCtx.swapSignIn() }} className="text-yellow-600 hover:text-yellow-500">
                    Regístrese
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover >
  )
}