import {
  BuildingStorefront,
  CalendarMini,
  ChartPie,
  CheckCircle,
  CurrencyDollar,
  ReceiptPercent,
  Users,
} from "@medusajs/icons"
import {
  Badge,
  Button,
  Container,
  Heading,
  StatusBadge,
  Text,
} from "@medusajs/ui"
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { SingleColumnPage } from "../../components/layout/pages"

type StatusColor = "green" | "orange" | "red" | "grey"

type StatCard = {
  label: string
  value: string
  hint: string
  icon: ReactNode
}

type Creator = {
  initials: string
  name: string
  handle: string
  location: string
  audience: string
  service: string
  specialty: string
  gmv: number
  orders: number
  rating: string
  price: string
  conversion: string
  status: string
  statusColor: StatusColor
  privacyReady: boolean
}

type Service = {
  title: string
  creator: string
  type: string
  price: string
  sold: string
  margin: string
}

type Brief = {
  client: string
  title: string
  creator: string
  amount: number
  stage: string
  stageColor: StatusColor
  privacyMode: boolean
  reviewWindow: string
}

type ModelItem = {
  title: string
  value: string
  description: string
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(amount)

const Root = () => {
  const { t } = useTranslation()

  const stats: StatCard[] = [
    {
      label: t("designBridge.stats.activeCreators.label"),
      value: t("designBridge.stats.activeCreators.value"),
      hint: t("designBridge.stats.activeCreators.hint"),
      icon: <Users />,
    },
    {
      label: t("designBridge.stats.monthlyGmv.label"),
      value: t("designBridge.stats.monthlyGmv.value"),
      hint: t("designBridge.stats.monthlyGmv.hint"),
      icon: <CurrencyDollar />,
    },
    {
      label: t("designBridge.stats.creatorPlan.label"),
      value: t("designBridge.stats.creatorPlan.value"),
      hint: t("designBridge.stats.creatorPlan.hint"),
      icon: <ReceiptPercent />,
    },
    {
      label: t("designBridge.stats.designarUsers.label"),
      value: t("designBridge.stats.designarUsers.value"),
      hint: t("designBridge.stats.designarUsers.hint"),
      icon: <BuildingStorefront />,
    },
  ]

  const creators: Creator[] = [
    {
      initials: t("designBridge.creators.noura.initials"),
      name: t("designBridge.creators.noura.name"),
      handle: t("designBridge.creators.noura.handle"),
      location: t("designBridge.creators.noura.location"),
      audience: t("designBridge.creators.noura.audience"),
      service: t("designBridge.creators.noura.service"),
      specialty: t("designBridge.creators.noura.specialty"),
      gmv: 4280,
      orders: 42,
      rating: t("designBridge.creators.noura.rating"),
      price: t("designBridge.creators.noura.price"),
      conversion: t("designBridge.creators.noura.conversion"),
      status: t("designBridge.status.waiver"),
      statusColor: "green",
      privacyReady: true,
    },
    {
      initials: t("designBridge.creators.faris.initials"),
      name: t("designBridge.creators.faris.name"),
      handle: t("designBridge.creators.faris.handle"),
      location: t("designBridge.creators.faris.location"),
      audience: t("designBridge.creators.faris.audience"),
      service: t("designBridge.creators.faris.service"),
      specialty: t("designBridge.creators.faris.specialty"),
      gmv: 3115,
      orders: 28,
      rating: t("designBridge.creators.faris.rating"),
      price: t("designBridge.creators.faris.price"),
      conversion: t("designBridge.creators.faris.conversion"),
      status: t("designBridge.status.proCreator"),
      statusColor: "orange",
      privacyReady: true,
    },
    {
      initials: t("designBridge.creators.lina.initials"),
      name: t("designBridge.creators.lina.name"),
      handle: t("designBridge.creators.lina.handle"),
      location: t("designBridge.creators.lina.location"),
      audience: t("designBridge.creators.lina.audience"),
      service: t("designBridge.creators.lina.service"),
      specialty: t("designBridge.creators.lina.specialty"),
      gmv: 2350,
      orders: 31,
      rating: t("designBridge.creators.lina.rating"),
      price: t("designBridge.creators.lina.price"),
      conversion: t("designBridge.creators.lina.conversion"),
      status: t("designBridge.status.waiver"),
      statusColor: "green",
      privacyReady: false,
    },
  ]

  const services: Service[] = [
    {
      title: t("designBridge.services.promptPack.title"),
      creator: t("designBridge.services.promptPack.creator"),
      type: t("designBridge.services.promptPack.type"),
      price: t("designBridge.services.promptPack.price"),
      sold: t("designBridge.services.promptPack.sold"),
      margin: t("designBridge.services.promptPack.margin"),
    },
    {
      title: t("designBridge.services.brandKit.title"),
      creator: t("designBridge.services.brandKit.creator"),
      type: t("designBridge.services.brandKit.type"),
      price: t("designBridge.services.brandKit.price"),
      sold: t("designBridge.services.brandKit.sold"),
      margin: t("designBridge.services.brandKit.margin"),
    },
    {
      title: t("designBridge.services.wedding.title"),
      creator: t("designBridge.services.wedding.creator"),
      type: t("designBridge.services.wedding.type"),
      price: t("designBridge.services.wedding.price"),
      sold: t("designBridge.services.wedding.sold"),
      margin: t("designBridge.services.wedding.margin"),
    },
    {
      title: t("designBridge.services.video.title"),
      creator: t("designBridge.services.video.creator"),
      type: t("designBridge.services.video.type"),
      price: t("designBridge.services.video.price"),
      sold: t("designBridge.services.video.sold"),
      margin: t("designBridge.services.video.margin"),
    },
  ]

  const briefs: Brief[] = [
    {
      client: t("designBridge.briefs.qatar.client"),
      title: t("designBridge.briefs.qatar.title"),
      creator: t("designBridge.briefs.qatar.creator"),
      amount: 400,
      stage: t("designBridge.stages.inReview"),
      stageColor: "orange",
      privacyMode: false,
      reviewWindow: t("designBridge.briefs.qatar.reviewWindow"),
    },
    {
      client: t("designBridge.briefs.wedding.client"),
      title: t("designBridge.briefs.wedding.title"),
      creator: t("designBridge.briefs.wedding.creator"),
      amount: 180,
      stage: t("designBridge.stages.creatorWorking"),
      stageColor: "green",
      privacyMode: true,
      reviewWindow: t("designBridge.briefs.wedding.reviewWindow"),
    },
    {
      client: t("designBridge.briefs.cafe.client"),
      title: t("designBridge.briefs.cafe.title"),
      creator: t("designBridge.briefs.cafe.creator"),
      amount: 65,
      stage: t("designBridge.stages.escrowFunded"),
      stageColor: "grey",
      privacyMode: false,
      reviewWindow: t("designBridge.briefs.cafe.reviewWindow"),
    },
  ]

  const modelItems: ModelItem[] = [
    {
      title: t("designBridge.model.waiver.title"),
      value: t("designBridge.model.waiver.value"),
      description: t("designBridge.model.waiver.description"),
    },
    {
      title: t("designBridge.model.commission.title"),
      value: t("designBridge.model.commission.value"),
      description: t("designBridge.model.commission.description"),
    },
    {
      title: t("designBridge.model.privacy.title"),
      value: t("designBridge.model.privacy.value"),
      description: t("designBridge.model.privacy.description"),
    },
    {
      title: t("designBridge.model.subscription.title"),
      value: t("designBridge.model.subscription.value"),
      description: t("designBridge.model.subscription.description"),
    },
  ]

  return (
    <SingleColumnPage hasOutlet={false}>
      <div className="flex flex-col gap-y-3" data-testid="designbridge-page">
        <Container className="overflow-hidden p-0">
          <div className="bg-ui-bg-component flex flex-col gap-y-8 px-6 py-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-3xl flex-col gap-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge size="2xsmall">{t("designBridge.hero.badge")}</Badge>
                <StatusBadge color="green">
                  {t("designBridge.hero.launchStatus")}
                </StatusBadge>
                <Badge size="2xsmall">{t("designBridge.hero.phase")}</Badge>
              </div>
              <div className="flex flex-col gap-y-2">
                <Heading data-testid="designbridge-page-title">
                  {t("designBridge.hero.title")}
                </Heading>
                <Text className="text-ui-fg-subtle max-w-2xl">
                  {t("designBridge.hero.description")}
                </Text>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="small"
                  asChild
                  data-testid="designbridge-preview-button"
                >
                  <Link to="/designbridge">
                    {t("designBridge.hero.primaryAction")}
                  </Link>
                </Button>
                <Button
                  size="small"
                  variant="secondary"
                  asChild
                  data-testid="designbridge-onboard-button"
                >
                  <Link to="/stores">{t("designBridge.hero.secondaryAction")}</Link>
                </Button>
              </div>
            </div>
            <div className="grid min-w-[280px] grid-cols-2 gap-2">
              <ProofPoint
                label={t("designBridge.hero.proofPoints.creators.label")}
                value={t("designBridge.hero.proofPoints.creators.value")}
              />
              <ProofPoint
                label={t("designBridge.hero.proofPoints.dispute.label")}
                value={t("designBridge.hero.proofPoints.dispute.value")}
              />
              <ProofPoint
                label={t("designBridge.hero.proofPoints.payout.label")}
                value={t("designBridge.hero.proofPoints.payout.value")}
              />
              <ProofPoint
                label={t("designBridge.hero.proofPoints.privacy.label")}
                value={t("designBridge.hero.proofPoints.privacy.value")}
              />
            </div>
          </div>
        </Container>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatTile key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="grid gap-3 xl:grid-cols-[1.35fr_0.65fr]">
          <Container className="divide-y p-0">
            <SectionHeader
              title={t("designBridge.creatorsSection.title")}
              description={t("designBridge.creatorsSection.description")}
            />
            <div className="grid gap-3 p-4 lg:grid-cols-3">
              {creators.map((creator) => (
                <CreatorCard
                  key={creator.handle}
                  creator={creator}
                  gmv={formatCurrency(creator.gmv)}
                  ordersLabel={t("designBridge.labels.orders")}
                  ratingLabel={t("designBridge.labels.rating")}
                  conversionLabel={t("designBridge.labels.conversion")}
                  priceLabel={t("designBridge.labels.price")}
                  privacyReadyLabel={t("designBridge.labels.privacyReady")}
                  privacyUnavailableLabel={t(
                    "designBridge.labels.privacyUnavailable"
                  )}
                />
              ))}
            </div>
          </Container>

          <Container className="divide-y p-0">
            <SectionHeader
              title={t("designBridge.modelSection.title")}
              description={t("designBridge.modelSection.description")}
            />
            <div className="grid gap-3 p-4">
              {modelItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-ui-bg-subtle shadow-borders-base rounded-lg p-4"
                >
                  <div className="flex items-center justify-between gap-x-3">
                    <Text weight="plus">{item.title}</Text>
                    <Text weight="plus">{item.value}</Text>
                  </div>
                  <Text size="small" className="text-ui-fg-subtle mt-1">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </div>

        <div className="grid gap-3 xl:grid-cols-2">
          <Container className="divide-y p-0">
            <SectionHeader
              title={t("designBridge.servicesSection.title")}
              description={t("designBridge.servicesSection.description")}
            />
            <div className="divide-y">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="grid gap-3 px-6 py-4 md:grid-cols-[1fr_140px_120px]"
                >
                  <div className="flex flex-col gap-y-1">
                    <Text weight="plus">{service.title}</Text>
                    <Text size="small" className="text-ui-fg-subtle">
                      {service.creator} - {service.type}
                    </Text>
                  </div>
                  <div>
                    <Text size="small" className="text-ui-fg-subtle">
                      {t("designBridge.labels.price")}
                    </Text>
                    <Text weight="plus">{service.price}</Text>
                  </div>
                  <div>
                    <Text size="small" className="text-ui-fg-subtle">
                      {service.sold}
                    </Text>
                    <Text weight="plus">{service.margin}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Container>

          <Container className="divide-y p-0">
            <SectionHeader
              title={t("designBridge.briefsSection.title")}
              description={t("designBridge.briefsSection.description")}
            />
            <div className="divide-y">
              {briefs.map((brief) => (
                <div key={brief.title} className="flex flex-col gap-y-3 px-6 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-col gap-y-1">
                      <Text weight="plus">{brief.title}</Text>
                      <Text size="small" className="text-ui-fg-subtle">
                        {brief.client} - {brief.creator}
                      </Text>
                    </div>
                    <StatusBadge color={brief.stageColor}>{brief.stage}</StatusBadge>
                  </div>
                  <div className="grid gap-2 md:grid-cols-3">
                    <BriefMetric
                      label={t("designBridge.labels.escrow")}
                      value={formatCurrency(brief.amount)}
                    />
                    <BriefMetric
                      label={t("designBridge.labels.reviewWindow")}
                      value={brief.reviewWindow}
                    />
                    <BriefMetric
                      label={t("designBridge.labels.privacyMode")}
                      value={
                        brief.privacyMode
                          ? t("designBridge.labels.enabled")
                          : t("designBridge.labels.notEnabled")
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        <Container className="divide-y p-0">
          <SectionHeader
            title={t("designBridge.flowSection.title")}
            description={t("designBridge.flowSection.description")}
          />
          <div className="grid gap-3 p-4 md:grid-cols-4">
            <FlowStep
              icon={<CheckCircle />}
              title={t("designBridge.flow.brief.title")}
              description={t("designBridge.flow.brief.description")}
            />
            <FlowStep
              icon={<Users />}
              title={t("designBridge.flow.creator.title")}
              description={t("designBridge.flow.creator.description")}
            />
            <FlowStep
              icon={<CalendarMini />}
              title={t("designBridge.flow.review.title")}
              description={t("designBridge.flow.review.description")}
            />
            <FlowStep
              icon={<ChartPie />}
              title={t("designBridge.flow.release.title")}
              description={t("designBridge.flow.release.description")}
            />
          </div>
        </Container>
      </div>
    </SingleColumnPage>
  )
}

const ProofPoint = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-ui-bg-subtle shadow-borders-base rounded-lg p-3">
      <Text size="xsmall" className="text-ui-fg-subtle">
        {label}
      </Text>
      <Text weight="plus">{value}</Text>
    </div>
  )
}

const StatTile = ({ stat }: { stat: StatCard }) => {
  return (
    <Container className="p-4">
      <div className="flex items-start justify-between gap-x-3">
        <div className="flex flex-col gap-y-1">
          <Text size="small" className="text-ui-fg-subtle">
            {stat.label}
          </Text>
          <Heading level="h2">{stat.value}</Heading>
          <Text size="small" className="text-ui-fg-subtle">
            {stat.hint}
          </Text>
        </div>
        <div className="bg-ui-bg-base shadow-borders-base text-ui-fg-subtle flex size-8 items-center justify-center rounded-md">
          {stat.icon}
        </div>
      </div>
    </Container>
  )
}

const SectionHeader = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col gap-y-1 px-6 py-4">
      <Heading level="h2">{title}</Heading>
      <Text size="small" className="text-ui-fg-subtle">
        {description}
      </Text>
    </div>
  )
}

const CreatorCard = ({
  creator,
  gmv,
  ordersLabel,
  ratingLabel,
  conversionLabel,
  priceLabel,
  privacyReadyLabel,
  privacyUnavailableLabel,
}: {
  creator: Creator
  gmv: string
  ordersLabel: string
  ratingLabel: string
  conversionLabel: string
  priceLabel: string
  privacyReadyLabel: string
  privacyUnavailableLabel: string
}) => {
  return (
    <div className="bg-ui-bg-subtle shadow-borders-base flex flex-col gap-y-4 rounded-lg p-4">
      <div className="flex items-start justify-between gap-x-3">
        <div className="flex items-center gap-x-3">
          <div className="bg-ui-bg-base shadow-borders-base flex size-10 items-center justify-center rounded-full">
            <Text size="small" weight="plus">
              {creator.initials}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text weight="plus">{creator.name}</Text>
            <Text size="small" className="text-ui-fg-subtle">
              {creator.handle}
            </Text>
          </div>
        </div>
        <StatusBadge color={creator.statusColor}>{creator.status}</StatusBadge>
      </div>
      <div className="flex flex-col gap-y-1">
        <Text size="small" className="text-ui-fg-subtle">
          {creator.location} - {creator.audience}
        </Text>
        <Text weight="plus">{creator.service}</Text>
        <Text size="small" className="text-ui-fg-subtle">
          {creator.specialty}
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <BriefMetric label={ordersLabel} value={`${creator.orders}`} />
        <BriefMetric label={ratingLabel} value={creator.rating} />
        <BriefMetric label={conversionLabel} value={creator.conversion} />
        <BriefMetric label={priceLabel} value={creator.price} />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge size="2xsmall">
          {creator.privacyReady ? privacyReadyLabel : privacyUnavailableLabel}
        </Badge>
        <Text weight="plus">{gmv}</Text>
      </div>
    </div>
  )
}

const BriefMetric = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-ui-bg-base shadow-borders-base rounded-md px-3 py-2">
      <Text size="xsmall" className="text-ui-fg-subtle">
        {label}
      </Text>
      <Text size="small" weight="plus">
        {value}
      </Text>
    </div>
  )
}

const FlowStep = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) => {
  return (
    <div className="bg-ui-bg-subtle shadow-borders-base flex flex-col gap-y-3 rounded-lg p-4">
      <div className="bg-ui-bg-base shadow-borders-base text-ui-fg-subtle flex size-8 items-center justify-center rounded-md">
        {icon}
      </div>
      <div className="flex flex-col gap-y-1">
        <Text weight="plus">{title}</Text>
        <Text size="small" className="text-ui-fg-subtle">
          {description}
        </Text>
      </div>
    </div>
  )
}

export const DesignBridgePage = Root
