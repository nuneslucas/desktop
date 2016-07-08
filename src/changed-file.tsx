import * as React from 'react'

import {FileStatus} from './models/status'

interface ChangedFileProps {
  path: string,
  status: FileStatus
}

interface ChangedFileState {
  include: boolean
}

/** a changed file in the working directory for a given repository */
export default class ChangedFile extends React.Component<ChangedFileProps, ChangedFileState> {

  private static mapStatus(status: FileStatus): string {
    if (status === FileStatus.New) { return 'New' }
    if (status === FileStatus.Modified) { return 'Modified' }
    if (status === FileStatus.Deleted) { return 'Deleted' }
    return 'Unknown'
  }

  public constructor(props: ChangedFileProps) {
    super(props)

    this.state = { include: true }
  }

  private handleChange(event: any) {
    let state = event.target.checked
    this.setState({
      include: !state
    })
  }

  public render() {
    return (
        <li>
          <input
            type='checkbox'
            defaultChecked={this.state.include}
            onChange={event => this.handleChange(event)}
          />
        <strong>{this.props.path}</strong> - {ChangedFile.mapStatus(this.props.status)}</li>
    )
  }
}
