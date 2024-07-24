import React from 'react'
import {
  DashboardContainer,
  DashboardContent,
  DashboardTileWrap,
  DashboardTilesS,
  DashboardTilesR,
  DashboardCount,
  DashboardLabel
} from './elements'

const Dashboard = () => {
  return (
    <DashboardContainer id='dashboard'>
      <DashboardContent>
        <DashboardTileWrap>
          <DashboardTilesS to="incomingorders">
            <DashboardCount>10</DashboardCount>
            <DashboardLabel>Incoming Orders</DashboardLabel>
          </DashboardTilesS>
          <DashboardTilesS to="kitchenorders">
            <DashboardCount>11</DashboardCount>
            <DashboardLabel>In The Kitchen</DashboardLabel>
          </DashboardTilesS>
        </DashboardTileWrap>
        <DashboardTileWrap>
          <DashboardTilesS to="dispatchedorders">
            <DashboardCount>12</DashboardCount>
            <DashboardLabel>Dispatched Orders</DashboardLabel>
          </DashboardTilesS>
          <DashboardTilesR to="/completedorders">
            <DashboardCount>13</DashboardCount>
            <DashboardLabel>Completed Orders</DashboardLabel>
          </DashboardTilesR>
        </DashboardTileWrap>
      </DashboardContent>
    </DashboardContainer>
  )
}

export default Dashboard
