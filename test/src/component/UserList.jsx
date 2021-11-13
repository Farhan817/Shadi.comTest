import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
// import getUser from "../utils/RandomUserAPI"
import "../styles/UserList.css"

function UserList() {
    const history = useHistory()



    let page = 1
    let limit = 10

    const [loadMore, setLoadMore] = useState(true)
    const [results, setResults] = useState([])

    useEffect(() => {
        getUser(page, limit, loadMore)
    }, [loadMore])

    useEffect(() => {
        const list = document.querySelector('.list-group')
        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
                setLoadMore(true)
                page = page + 1
            }
        })
    }, [])


    const getUser = (page, result, loadMore) => {
        setTimeout(() => {
            let data = []
            if (loadMore) {
                axios.get(`https://randomuser.me/api/?page=${page}&results=${result}`)
                    .then(response => {
                        data = results.concat(response.data.results)
                        setResults(data)
                        setLoadMore(false)
                    }).catch(e => {
                        setResults(e.messagt)
                    })
            }
        }, 1000)
    }
    const handleLogout = () => {
        window.sessionStorage.removeItem("isLogin")
        history.push("./login")
    }

    return (
        <>
            <div className="row">
                <div className="col-8">
                    <h1 className="text-center">Contact List</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={() => {
                        handleLogout()
                    }}>
                        Logout
                    </button>
                </div>
            </div>

            <ul class="list-group" >
                {results &&
                    results.map((elem, index) => (
                        <li class="list-group-item " key={index}>
                            <div className="row">


                                <div className="col-4  ">
                                    {elem?.name?.first + " " + elem?.name?.last}
                                </div>
                                <div className=" col d-flex justify-content-end">
                                    <img alt="Avatar" class="avatar" src={elem?.picture?.medium} />
                                </div>
                            </div>
                        </li>
                    )
                    )
                }
            </ul>
            {
                loadMore && (
                    <div className="alert alert-info" role="alert">
                        Loading more data
                    </div>
                )

            }
        </>
    )
}

export default UserList
