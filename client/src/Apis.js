import React, { useEffect, useState } from 'react'
import Settings from 'Settings';

export default function Apis() {
    const [apis, setApis] = useState(null);
    useEffect(() => {
        fetch(`${Settings.API_TRANSPORT}://${Settings.API_HOST}:${Settings.API_PORT}/api/am/publisher/v3/apis/?limit=5&offset=0&sortBy=name&sortOrder=asc`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                let apis = json.list;
                setApis(apis);
            })

    }, [])
    if (apis && apis.length === 0) {
        return (<div>no apis</div>)
    }
    if (!apis) {
        return (<div>loading ..</div>)
    }
    return (
        <div className="wrapper">
            <div className="container">
                <div className="table">
                    <table cellSpacing="0" cellPadding="0" style={{ paddingTop: 200 }}>
                        <thead>
                            <tr>
                                <td colSpan="2"><font className="header">APIs</font> </td>
                                <td colSpan="2">
                                    <input className="search" placeholder="Search..." />
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Version</td>
                                <td>Context</td>
                            </tr>
                        </thead>
                        <tbody>
                            {apis.map(api => (<tr>
                                <td>{api.name}</td>
                                <td>{api.version}</td>
                                <td>{api.context}</td>
                            </tr>))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="100%">
                                    <div className="pagination">
                                        <div className="page active">1</div>
                                        <div className="page">2</div>
                                        <div className="page">3</div>
                                        <div className="page">4</div>
                                        <div className="page">5</div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
