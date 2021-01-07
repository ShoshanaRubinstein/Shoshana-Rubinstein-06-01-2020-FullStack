USE [weather app]
GO

/****** Object:  Table [dbo].[Weather]    Script Date: 1/6/2021 6:26:55 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Weather](
	[CodeWeather] [int] IDENTITY(1,1) NOT NULL,
	[WeatherText] [varchar](50) NULL,
	[Temperature] [varchar](50) NULL,
	[CityKey] [varchar](50) NULL,
 CONSTRAINT [PK_Weather] PRIMARY KEY CLUSTERED 
(
	[CodeWeather] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

