import React, { Component } from "react";
import "./container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";

class FilesList extends Component {
  state = {};

  componentDidMount() {
    fetch("/getFiles")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          filesList: res,
          path: "/home/bathirenathan/Documents/apps/",
        });
      });
  }

  download = (fileName, isFolder) => {
    console.log(fileName);
    if (isFolder) {
      //TO-DO navigate to inner folder
    } else {
      let url = "/download?file=" + fileName;
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          var file = window.URL.createObjectURL(blob);
          window.location.assign(file);
        });
    }
  };

  getAllfilesContent = () => {
    let allFilesMap = this.state.filesList;
    if (allFilesMap)
      return Object.keys(allFilesMap).map((e) => (
        <div
          className="file-item"
          onClick={() => this.download(e, allFilesMap[e])}
        >
          <div className="files-icon d-flex-center">
            <FontAwesomeIcon
              icon={allFilesMap[e] === true ? faFolder : faFile}
              size="5x"
            />
          </div>
          <div>{e}</div>
        </div>
      ));
    else return null;
  };
  render() {
    return <div className="item-container">{this.getAllfilesContent()}</div>;
  }
}

export default FilesList;
