import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

interface Props {
  title?: string
  value?: string
  text?: string
}

const RevenueCard = ({ title, value, text }: Props) => {
  return (
    <Card className="w-full max-w-sm">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title || 'Total Revenue'}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value || '$15,231.89'}</div>
      <p className="text-xs text-muted-foreground">
        {text || 'Revenue for the last 30 days'}
      </p>
    </CardContent>
  </Card>
  )
}

export default RevenueCard