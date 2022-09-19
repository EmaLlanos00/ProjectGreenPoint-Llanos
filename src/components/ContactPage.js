import React from 'react'
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
const ContactPage = () => {
    return (
        <div>
            <div className="bg-indigo-600">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-indigo-800 p-2">
                                <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                <span className="md:hidden">We announced a new product!</span>
                                <span className="hidden md:inline">Big news! This gotta be an almost full functional contact form soon!</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                            >
                                Learn more
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full m-3'>
                <div className='w-6/12 flex flex-col gap-8 border-solid border-2 border-indigo-600 p-3 rounded-md'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Name</span>
                            <input type="text" placeholder="write down your name here" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <div>
                    <p> Please leave a comment </p>
                    <textarea className="textarea textarea-primary" placeholder="write your comment here!" cols="40"></textarea>
                    </div>
                </div>
            </div>
        </div>
)
}
export default ContactPage          