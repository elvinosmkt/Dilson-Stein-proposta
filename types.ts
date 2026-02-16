
export interface Milestone {
  phase: string;
  duration: string;
  description: string;
}

export interface PaymentStep {
  label: string;
  value: number;
  condition: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ProposalContent {
  title: string;
  client: string;
  proposer: string;
  presentation: string;
  scenario: string;
  objectives: string[];
  scope: Feature[];
  benefits: string[];
  milestones: Milestone[];
  payments: PaymentStep[];
}
