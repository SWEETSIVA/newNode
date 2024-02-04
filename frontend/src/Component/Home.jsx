import { useEffect, useState } from "react"
import axiox from "axios"

function Home() {
  const backendURL = "http://futuretechtenkasi.info:4000/std"
  const [formData, setFormData] = useState({
    username: "",
    mail: "",
    password: ""
  })
  const [data, setData] = useState([])

  useEffect(() => {
    getAllData()
  }, [])

  useEffect(() => {
    getAllData()
  }, [data])


  function inputChange(e) {
    const { name, value } = e.target
    setFormData(
      {
        ...formData,
        [name]: value
      })
  }

  function formAction(e) {
    e.preventDefault()
    const submit = e.nativeEvent.submitter.value

    if (submit === "ADD") {
      addData()
      clearData()
    }
    else if (submit === "EDIT") {
      editData()
      clearData()
    }
    else if (submit === "DELETE") {
      deleteData()
      clearData()
    }
    else if (submit === "CLEAR") {
      clearData()
    }
    getAllData()

  }
  function addData() {
    axiox.post(backendURL + "/add", formData)
      .then((msg) => {
        console.log(msg)
        alert("Data Added")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function editData() {
    axiox.put(backendURL + "/edit", formData)
      .then((msg) => {
        console.log(msg)
        alert("Data Updated")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteData() {
    axiox.delete(backendURL + "/delete", { data: { username: formData.username } })
      .then((msg) => {
        console.log(msg)
        alert("Data Deleted")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function clearData() {
    setFormData(
      {
        username: "",
        mail: "",
        password: ""
      }
    )
  }

  function getAllData() {
    try {
      axiox.get(backendURL + "/").then((alldata) => {
        setData(alldata.data)
      })
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-primary text-center text-uppercase">Register Form</h4>
          <form onSubmit={formAction}>
            <div className="form-group">
              <label htmlFor="username" className="label-control my-2">UserName</label>
              <input name="username" value={formData.username} onChange={inputChange} type="text" placeholder="enter user name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="mail" className="label-control my-2">Mail ID</label>
              <input name="mail" value={formData.mail} onChange={inputChange} type="email" placeholder="enter mail id" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label-control my-2">Password</label>
              <input name="password" value={formData.password} onChange={inputChange} type="password" placeholder="password" className="form-control" />
            </div>
            <br />
            <input type="submit" className="btn btn-primary m-2" value="ADD"></input>
            <input type="submit" className="btn btn-warning m-2" value="EDIT"></input>
            <input type="submit" className="btn btn-info m-2" value="DELETE"></input>
            <input type="submit" className="btn btn-danger m-2" value="CLEAR"></input>
          </form>
        </div>
        <div className="col-md-6">
          <h4 className="text-danger text-center text-uppercase">All Register Data</h4>

          <div className="table-responsive">
          <table className="table table-info table-hover table-bordered  mt-4">
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.username}</td>
                  <td>{row.mail}</td>
                  <td>{row.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;